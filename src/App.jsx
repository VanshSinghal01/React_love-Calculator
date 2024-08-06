import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let main = [
  {
    name: "As he read, I fell in love the way you fall asleep: slowly, and then all at once.",
  },
  {
    name: 'I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.'
  },
  {
    name: 'I’ll be loving you, always with a love that’s true'
  },
  {
    name: 'I need you like a heart needs a beat.'
  },
  {
    name: 'I love you as certain dark things are to be loved, in secret, between the shadow and the soul'
  },
  {
    name:'I love you as certain dark things are to be loved, in secret, between the shadow and the soul.'
  },
  {
    name: 'Take my hand, take my whole life too. For I can’t help falling in love with you.'
  },
  {
    name: 'Grow old along with me; the best is yet to be'
  },
  {
    name: 'Love is that condition in which the happiness of another person is essential to your own.'
  },
  {
    name: 'Love is so short, forgetting is so long.'
  },
  {
    name: 'Love is not love until love’s vulnerable.'
  },
  {
    name: 'Love is like the wind, you can’t see it but you can feel it.'
  }
]

function App() {
  const [input, setinput] = useState('')
  const [input1, setinput1] = useState('')
  const [data, setdata] = useState('')
  const [show, setshow] = useState([])
  const [see, setsee] = useState(false)
  const [disable, setdisable] =useState(false)

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * main.length);
    setshow(main[randomIndex].name);
  }, []
  );

  const handel = (event) => {
    if (event.key === 'Enter' && input !== '' && input1 !== '') {
      click();
    }
  };

  const click = () => {
    const randomNumber = Math.floor(Math.random() *100) + 1;
    setdata(randomNumber.toString());

    const randomIndex = Math.floor(Math.random() * main.length);
    setshow(main[randomIndex].name);

    setsee(true);
    setdisable(true);
  }

  return (
    <>
   <div>
      <div className='box-content'>
        <h1>Love ♥ Calculator</h1>
      </div>
      <div className='box-content1'>
        <p>Get Your own Love Result Instantly... </p>
      </div>
      <div className='main'>
      <div className='box-1'>
        <p>`Your Name</p>
        <input
          type='text'
          onChange={(e) => setinput(e.target.value)}
          value={input}
          className='container'
          onKeyPress={handel}
        />
        </div>
        <div className='box-2'>
          <p>`His/Her Name</p>
        <input
          type='text'
          onChange={(e) => setinput1(e.target.value)}
          value={input1}
          className='container'
          onKeyPress={handel}
        />
      </div>
      </div>
      <div className='box-2'>
      {!disable &&
      <button disabled={input == "" && input1 == ""} onClick={click} className='contain'>❤Calculate❤</button>
      }
      </div>
      <div className='shooo'>
        { see &&
        <h1>Result</h1>
       }
      <div className='sho'>
        { see&&
        <div>
        <h2>Compatability: {data}%</h2>
        </div>
         }
      </div>
      <div className='sho'>
        {see &&
         <div>
          <p> { show }</p>
           </div>}
      </div>
      </div>
  </div>
    </>
  )
}

export default App
