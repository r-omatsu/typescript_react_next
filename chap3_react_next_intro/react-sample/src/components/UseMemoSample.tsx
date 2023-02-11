import React, { useMemo, useState } from "react"

export const UseMemoSample = () => {
  const [text, setText] = useState('')
  const [items, setItems] = useState<string[]>([])
   
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text]
    })
    setText('')
  }

  const numberOfCharacters1 = items.reduce((sub, item) => {
    console.log('useMemoなし')
    return sub + item.length
  }, 0)
  const numberOfCharacters2 = useMemo(() => {
    console.log('useMemoあり')
    return items.reduce((sub, item) => sub + item.length, 0)
  }, [items])

  return (
    <div>
      <p>UseMemoSample</p>
      <div>
        <input type="text" value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>Add</button>
      </div>
      <div>
        {items.map((item, index) => (<p key={index}>{item}</p>))}
      </div>
      <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
    </div>
  )
}