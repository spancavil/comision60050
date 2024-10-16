import React, { memo, useEffect } from "react"

const MemoizedComponent = () => {
    console.log("Memoized component render!")

    return <div>MemoizedComponent</div>

}

export default MemoizedComponent
