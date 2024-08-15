import React from 'react';
import Image from 'next/image'

function Landing() {
  return (
    <div>
       <div className="animationContainer grid grid-cols-1 sm:grid-cols-1 md:grid-cols-13 lg:grid-cols-2 gap-4">
      <div>
        <Image src={require("/public/assets/images/images (4).jpeg")} className="animatedElement" alt="picture" />
      </div>
      <div>
       <h2 className=" mt-5 pt-5 text-2xl " style={{color: '#0096a5'}}>
        ZionReborn University
      </h2>     
      <p className="desc">lorem ipsum and the awesoe of the ahwole theio direjsjgh aahyfa uafgyla and the asdf aga aadjlgh ualif
        hbgailllllllllllauugu uaugv usuusyf ujakhbv ahgbzkfb hhha;f jjhfbbi aoifuuchf hhaabcba HDHAKAHbab abfbak
        ahjvh direjsjgh aahyfa uafgyla and the asdf aga aadjlgh ualif
      </p>j
     </div>

    </div> 
    </div>
  );
}

export default Landing;



