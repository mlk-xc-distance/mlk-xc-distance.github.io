/* ============================================================
   EDIT ME: add, remove, or edit quotes freely — one rotates in
   automatically each day (same quote for everyone, all day,
   based on the date). No code changes needed elsewhere.
   ============================================================ */
const QUOTES = [
  { text: "The miracle isn't that I finished. The miracle is that I had the courage to start.", author: "John Bingham" },
  { text: "Run when you can, walk if you have to, crawl if you must; just never give up.", author: "Dean Karnazes" },
  { text: "The obsession with running is really an obsession with the potential for more and more life.", author: "George Sheehan" },
  { text: "Somewhere in the world someone is training when you are not. When you race him, he will win.", author: "Tom Fleming" },
  { text: "Run often. Run long. But never outrun your joy of running.", author: "Julie Isphording" },
  { text: "You have to forget your last race before you try another. Your mind can't know what's coming.", author: "Frank Shorter" },
  { text: "To give anything less than your best is to sacrifice the gift.", author: "Steve Prefontaine" },
  { text: "Good things come slow, especially in distance running.", author: "Bill Dellinger" },
  { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
  { text: "Champions keep playing until they get it right.", author: "Billie Jean King" },
  { text: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
  { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" },
  { text: "I've failed over and over and over again in my life, and that is why I succeed.", author: "Michael Jordan" },
  { text: "The only way to prove you are a good sport is to lose.", author: "Ernie Banks" },
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "Patience is bitter, but its fruit is sweet.", author: "Aristotle" },
  { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
  { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "The journey of a thousand miles begins with a single step.", author: "Lao Tzu" },
  { text: "Do not judge me by my success, judge me by how many times I fell down and got back up again.", author: "Nelson Mandela" },
  { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
];

document.addEventListener('DOMContentLoaded', function(){
  const el = document.getElementById('dailyQuote');
  if (!el) return;
  const dayIndex = Math.floor(Date.now() / 86400000);
  const quote = QUOTES[dayIndex % QUOTES.length];
  el.innerHTML = `“${quote.text}” <span class="quote-author">— ${quote.author}</span>`;
});
