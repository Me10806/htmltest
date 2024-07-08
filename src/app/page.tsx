
import Image from "next/image";
import Article from "./Article";
import React from 'react';


import './tabletest.css';

export default function Home() {

  const itemList = [['学習言語', '期間'],  ['VBA', '4年'],['Javascript', '3か月'], ['Python', '3か月'],['Java', '2単位'], ['Visual Basic', '2単位']];
  
  return (

    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main> 
      <div>
          <Article
            title ={'■名前'}
            content={'Fujiwara Shota'}
            fontsize={30}
            textiti={'Left'}
            titleleftpt = {0}
            titletoppt = {10}
            contentleftpt = {20}
            contenttoppt = {0}
          />

          <Article
            title ={'■出身大学'}
            content={'岩手県立大学'}
            fontsize={30}
            textiti={'Left'}
            titleleftpt = {0}
            titletoppt = {20}
            contentleftpt = {20}
            contenttoppt = {0}
          />

      </div>

      <br></br>
      
      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        {/* <a href="https://www.iwate-pu.ac.jp/" target="_blank" rel="noopener noreferrer"> */}
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            // src="/next.svg"
            src="/iwate.jpg"
            alt="Next.js Logo"
            width={1920}
            height={960}
            priority
          />
        {/* </a> */}
      </div>
      
      <p>大学URL:
        <a href="https://www.iwate-pu.ac.jp/" target="_blank" rel="noopener noreferrer">https://www.iwate-pu.ac.jp/</a>
      </p>

      <br></br>

      <h1>■これまでの経験・知識・技術。</h1>
      <table className="table">
        <tbody>
          {itemList.map((item, index) => (
            <tr key={index}>
              <td>{item[0]}</td>
              <td>{item[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </main>
  );
}



