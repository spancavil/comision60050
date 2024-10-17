import React, { useMemo, useState } from "react"
import { initialItems } from "./items"
import MemoizedComponent from "./MemoizedComponent"

const DemoMemo = () => {
    const [count, setCount] = useState(0)
    const [items, setItems] = useState(initialItems)

    console.time("find item")
    //Va a recorrer los 9_999_999 elementos hasta que encuentre el verdadero (tarda!)
    const selectedItem = useMemo(()=> {

        return items.find((item) => item.isSelected)
    },
        [items]
    )
    // const selectedItem = useMemo(
    //     () => items.find((item) => item.isSelected),
    //     [items]
    // )
    console.timeEnd("find item")

    return (
        <div>
            <h1>Count: {count}</h1>
            <h1>Selected item: {selectedItem?.id}</h1>
            <MemoizedComponent />
            <button onClick={() => setCount((prev) => prev + 1)}>
                Increment
            </button>
        </div>
    )
}

export default DemoMemo
