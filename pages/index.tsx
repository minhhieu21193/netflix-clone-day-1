import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Header from "../components/Header";
import axios from "axios";
import requests from "../utils/requests";
import { Movie } from "../typings";
import Row from "../components/Row";
import useAuth from "../hooks/useAuth";
import { modalState } from "../atoms/modalAtoms";
import { useRecoilValue } from "recoil";
import Modal from "../components/ModalCom";
import ModalCom from "../components/ModalCom";
interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}
const Home = ({
  netflixOriginals,
  actionMovies,
  comedyMovies,
  documentaries,
  horrorMovies,
  romanceMovies,
  topRated,
  trendingNow,
}: Props) => {
  const { loading } = useAuth();
  const showModal = useRecoilValue(modalState);

  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative pl-4 pb-24 lg:space-y-24 lg:pl-16">
        <Banner netflixOriginals={netflixOriginals} />
        <section className="md:space-y-24">
          <Row title="Trending Now" movies={trendingNow} />
          <Row title="Top Rated" movies={topRated} />
          <Row title="Action Thrillers" movies={actionMovies} />
          {/* My List */}
          <Row title="Comedies" movies={comedyMovies} />
          <Row title="Scary Movies" movies={horrorMovies} />
          <Row title="Romance Movies" movies={romanceMovies} />
          <Row title="Documentaries" movies={documentaries} />
        </section>
      </main>
      {showModal && <ModalCom />}
    </div>
  );
};

export default Home;
export const getServerSideProps = async () => {
  const netflixOriginals = await axios.get(requests.fetchNetflixOriginals);
  const trendingNow = await axios.get(requests.fetchTrending);
  const topRated = await axios.get(requests.fetchTopRated);
  const actionMovies = await axios.get(requests.fetchActionMovies);
  const comedyMovies = await axios.get(requests.fetchComedyMovies);
  const horrorMovies = await axios.get(requests.fetchHorrorMovies);
  const romanceMovies = await axios.get(requests.fetchRomanceMovies);
  const documentaries = await axios.get(requests.fetchDocumentaries);
  return {
    props: {
      netflixOriginals: netflixOriginals.data.results,
      trendingNow: trendingNow.data.results,
      topRated: topRated.data.results,
      actionMovies: actionMovies.data.results,
      comedyMovies: comedyMovies.data.results,
      horrorMovies: horrorMovies.data.results,
      romanceMovies: romanceMovies.data.results,
      documentaries: documentaries.data.results,
    },
  };
};
