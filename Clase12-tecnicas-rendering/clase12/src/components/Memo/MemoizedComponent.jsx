import React, { memo, useEffect } from "react"

const MemoizedComponent = memo(() => {
    console.log("Memoized component render!")

    return <h1>Memoized Component</h1>

})

export default MemoizedComponent
