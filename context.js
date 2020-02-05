import React from "react";

const Context = React.createContext({
    updateState: (e) => {
        console.log(e);
    }
});

export default Context;