import Head from "next/head";
import { AllGamesContainer } from "../components/AllGames";

export default function AllGamesPage() {
  return (
    <>
      <Head>
        <title>All Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllGamesContainer />
    </>
  );
}
