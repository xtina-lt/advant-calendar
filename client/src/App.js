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
  const [date, setDate] = useState(da)
  const [header, setHeader] = useState("Advant Calendar")
  const [list, setList] = useState([
    {
      num: 1,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://images.milledcdn.com/2020-12-11/pxjK07ijE6rTCpLM/y82jThmNktOK.gif",
    },
    {
      num: 2,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://media.tenor.com/wTj844RIUkIAAAAC/happy-holidays-holiday.gif"
    },
    {
      num: 3,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://media3.giphy.com/media/9gPjwqLwFJcwYIIfgB/giphy.gif"
    },
    {
      num: 4,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://i.pinimg.com/originals/66/e0/20/66e020ef36324371ea6ed3ad3182649a.gif"
    },
    {
      num: 5,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://media3.giphy.com/media/1wrBPQfEfZdQ4GFAtZ/giphy.gif"
    },
    {
      num: 6,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://i.pinimg.com/originals/ac/84/0c/ac840c9395d9c3e655bbc70aaf779527.gif"
    },
    {
      num: 7,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 8,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 9,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 10,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 11,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 12,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 13,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 14,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 15,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 16,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 17,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 18,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://media2.giphy.com/media/3o6ZthJ0OOJv7LdPq0/giphy.gif"
    },
    {
      num: 19,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 20,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 21,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 22,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 23,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 24,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://1.bp.blogspot.com/-oVsebIuxUdI/WFxbKqN4T4I/AAAAAAAAkWA/uFCqs16Mt1gzg545hERIvN_hlrQbvjcwgCLcB/s1600/christmas%2Bgif.gif"
    },
    {
      num: 25,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 26,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 27,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 28,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 29,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 30,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    },
    {
      num: 31,
      link: "https://github.com/xtina-lt/MERN",
      gif: "https://promoalltest-blog.cdnpromo.com/wp-content/uploads/2021/11/My-Promo-video-37_1280x720-4.gif"
    }
  ])
  return (
    <>
      <BrowserRouter>
        <header>
          {header}
        </header>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to={`/${date}`}>
            Today
          </Link>
        </nav>
        <main>
          <Routes>
            <Route path='/*' element={<Catchall setHeader={setHeader} />} />
            <Route exact path='/' element={<Doors list={list} setList={setList} date={date}/>} />
            <Route path='/:id' element={<ShowDay list={list} date={date} setHeader={setHeader}/>}/>
            <Route exact path='/test' element={<ShowAll list={list} setHeader={setHeader}/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;