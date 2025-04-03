import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const greetings = [
    "Hi, ", "Hola, ", "Bonjour, ",
    "नमस्ते, ", "നമസ്കാരം, ", "வணக்கம், ",
    "నమస్తే, ", "ಹಲೋ, ", "مرحبا, ", "Hallo, ",
    "Përshëndetje, ", "ሰላም, ", "Բարև, ",
    "Salam, ", "Kaixo, ", "নমস্কার, ",
    "Kuzu zangpo la, ", "Zdravo, ",
    "Здравейте, ", "ဟယ်လို, ", "ជំរាបសួរ, ",
    "哈囉, ", "Moni, ", "Bok, ",
    "Ahoj, ", "Hej, ", "Tere, ",
    "سلام, ", "Bula, ", "Hei, ",
    "გამარჯობა, ", "Γεια σας, ", "Sannu, ",
    "Aloha, ", "שלום, ", "Nyob zoo, ",
    "Szia, ", "Halló, ", "Ndewo, ",
    "Halo, ", "Ciao, ", "こんにちは, ",
    "Сәлеметсіз бе, ", "ສະບາຍດີ, ", "Muraho, ",
    "Moa oti, ", "안녕하세요, ", "Салам, ",
    "ສະບາຍດີ, ", "Sveiki, ", "Wabula, ",
    "Здраво, ", "Manao ahoana, ",
    "Hai, ", "你好, ", "Kia ora, ",
    "Yokwe, ", "Сайн байна уу, ", "Sawubona, ",
    "Hei, ", "Moni, ", "Akkam, ",
    "Cześć, ", "Olá, ", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ, ",
    "Salut, ", "Здравствуйте, ", "Talofa, ",
    "Здраво, ", "Lumela, ", "Dumela, ",
    "Mhoro, ", "හෙලෝ, ", "Ahoj, ",
    "Živijo, ", "Salaam alaykum, ", "Odi, ",
    "Habari, ", "Kamusta, ", "Салом, ",
    "สวัสดี, ", "ሰላም, ", "Mālō e lelei, ",
    "Merhaba, ", "Вітаю, ", "سلام, ",
    "Salom, ", "Xin chào, ", "Molo, ",
    "Avuxeni, ", "Bawo ni, ",
  ];

  const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

  useEffect(() => {
    // GSAP Animation (Fade In)
    gsap.from('.home-name', {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: 'power3.out',
    });

    // Typing Effect (Cycles Through Greetings)
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % greetings.length; // Loops through greetings
      setCurrentGreeting(greetings[index]);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section id="home">
      <div className="home-container">
        <h1 className="home-name">{currentGreeting} I'm Abi</h1>
        <p>Welcome to my portfolio!</p>
      </div>
    </section>
  );
};

export default Home;
