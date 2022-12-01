import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Catchall from './components/Catchall';
import Doors from './components/Doors';
import ShowDay from './components/ShowDay';
import ShowAll from './components/ShowAll';

function App() {
  const d = new Date()
  const da = d.getDate()
  const [month, setMonth] = useState(d.getMonth())
  const [date, setDate] = useState(da)
  const [header, setHeader] = useState("Advant Calendar")
  const [list, setList] = useState([
    {
      num: 1,
      link: "https://codepen.io/alvarotrigo/pen/JjNwzoE",
      gif: "https://images.milledcdn.com/2020-12-11/pxjK07ijE6rTCpLM/y82jThmNktOK.gif",
    },
    {
      num: 2,
      link: "https://cssgradient.io/",
      gif: "https://media.tenor.com/wTj844RIUkIAAAAC/happy-holidays-holiday.gif"
    },
    {
      num: 3,
      link: "https://coolors.co/",
      gif: "https://media3.giphy.com/media/9gPjwqLwFJcwYIIfgB/giphy.gif"
    },
    {
      num: 4,
      link: "https://codepen.io/bradtraversy/pen/BvKOKp",
      gif: "https://i.pinimg.com/originals/66/e0/20/66e020ef36324371ea6ed3ad3182649a.gif"
    },
    {
      num: 5,
      link: "https://getcssscan.com/css-buttons-examples",
      gif: "https://media3.giphy.com/media/1wrBPQfEfZdQ4GFAtZ/giphy.gif"
    },
    {
      num: 6,
      link: "https://codepen.io/Bilal1909/pen/KKzjgzR",
      gif: "https://i.pinimg.com/originals/ac/84/0c/ac840c9395d9c3e655bbc70aaf779527.gif"
    },
    {
      num: 7,
      link: "https://www.w3schools.com/howto/howto_js_slideshow.asp",
      gif: "https://i.pinimg.com/originals/04/ca/21/04ca21688b87e1e573402be875d17f5c.gif"
    },
    {
      num: 8,
      link: "https://codepen.io/sakiadachi88/pen/wvzZWyG",
      gif: "https://i.gifer.com/origin/65/65ae35d8d14eb51ce5b6ab4d5ad56eb9.gif"
    },
    {
      num: 9,
      link: "https://jsfiddle.net/zinoui/dB93J/",
      gif: "https://media.tenor.com/pZ4hT5N-_0QAAAAM/christmas-christmas-cookies.gif"
    },
    {
      num: 10,
      link: "https://codepen.io/faaezahmd/pen/dJeRex",
      gif: "https://images.squarespace-cdn.com/content/v1/5bd7d8d1755be235a5fb7e9c/1600328719459-OQEYYWL5D1KBNO6OPC5W/292339-Twinkling-House-Christmas-Lights.gif"
    },
    {
      num: 11,
      link: "https://codepen.io/JTParrett/pen/kVKpMP",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 12,
      link: "hhttps://css-tricks.com/full-page-background-video-styles/",
      gif: "https://media1.giphy.com/media/AzdAFQqXHQy9BAVQqR/giphy.gif"
    },
    {
      num: 13,
      link: "https://www.w3schools.com/howto/howto_css_loading_buttons.asp",
      gif: "https://media2.giphy.com/media/Gpi6b9M5Sz62RM6uLZ/giphy.gif"
    },
    {
      num: 14,
      link: "https://www.w3schools.com/howto/howto_css_glowing_text.asp",
      gif: "https://i.gifer.com/ImWX.gif"
    },
    {
      num: 15,
      link: "https://codepen.io/brettflavin/pen/ExyGggM",
      gif: "https://media.tenor.com/wW09K74R1vEAAAAM/dan-aykroyd-christmas-lights.gif"
    },
    {
      num: 16,
      link: "https://codepen.io/allanwelerson/pen/OJPgQzb",
      gif: "https://www.lovethispic.com/uploaded_images/223918-Outdoor-Christmas-Lights.gif"
    },
    {
      num: 17,
      link: "https://codepen.io/rperry1886/pen/VwYKrxo",
      gif: "https://y.yarn.co/8816e8a9-8013-4052-bf3b-930f1e34048a_text.gif"
    },
    {
      num: 18,
      link: "https://codepen.io/alexerlandsson/pen/mPWgpO",
      gif: "https://media2.giphy.com/media/3o6ZthJ0OOJv7LdPq0/giphy.gif"
    },
    {
      num: 19,
      link: "https://www.youtube.com/watch?v=t2TXtDJSCLY",
      gif: "https://media.tenor.com/hu0QF0ikF7AAAAAC/ornaments-christmas-decorations.gif"
    },
    {
      num: 20,
      link: "https://codepen.io/panhiathao/pen/rNLVVQo",
      gif: "https://media0.giphy.com/media/9JrvLb0fnrn7k1ZjhX/giphy.gif"
    },
    {
      num: 21,
      link: "https://codepen.io/prathkum/pen/OJRvVzY",
      gif: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtQHggFX-c0RoZ0OUkkGGqGF-qCaj3Vsg0Yw&usqp=CAU"
    },
    {
      num: 22,
      link: "https://cssdeck.com/labs/christmas-button",
      gif: "https://media.tenor.com/vHInbH_S9-cAAAAC/chevy-chase-christmas-vacation.gif"
    },
    {
      num: 23,
      link: "https://www.w3schools.com/css/css3_images.asp",
      gif: "https://bestanimations.com/media/christmas/1782285845merry-christmas-tree-card-greetings-red-gif.gif"
    },
    {
      num: 24,
      link: "https://codepen.io/TackOnes1/pen/MaLQjr",
      gif: "https://1.bp.blogspot.com/-oVsebIuxUdI/WFxbKqN4T4I/AAAAAAAAkWA/uFCqs16Mt1gzg545hERIvN_hlrQbvjcwgCLcB/s1600/christmas%2Bgif.gif"
    },
    {
      num: 25,
      link: "https://pajasevi.github.io/CSSnowflakes/",
      gif: "https://media4.giphy.com/media/euviDNZfscxPOVSkHa/giphy.gif"
    }
  ])
  return (
    <>
      <BrowserRouter>
        <header>
          {header}
        </header>
        <nav>
          <a href="/">
            Home
          </a>
          <a href={`/${date}`}>
            Today
          </a>
          <a href="https://github.com/xtina-lt/advant-calendar" target="_blank" rel="noopener noreferrer">

          </a>
        </nav>
        <main>
          <Routes>
            <Route path='/*' element={<Catchall setHeader={setHeader} />} />
            <Route exact path='/' element={<Doors list={list} setList={setList} date={date} month={month} setHeader={setHeader}/>} />
            <Route path='/:id' element={<ShowDay list={list} date={date} month={month} setHeader={setHeader}/>}/>
            <Route exact path='/test' element={<ShowAll list={list} setHeader={setHeader}/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
