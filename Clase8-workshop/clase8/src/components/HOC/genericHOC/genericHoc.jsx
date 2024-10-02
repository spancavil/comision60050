import React from "react"

const withEnhancement = (BaseComponent) => {
    const EnhancedComponent = (props) => {
        // HOC-specific logic using hooks
        return <BaseComponent {...props} enhancedProp="someValue" />
    }

    return EnhancedComponent
}

export default withEnhancement
