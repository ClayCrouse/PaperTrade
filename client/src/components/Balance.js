import React, {useState} from "react"

const Balance = () => {

    const [balance, setBalance] = useState(10000.01)

    return (
        <div>
            <h3>
                Balance: ${balance}
            </h3>
        </div>
    )
}

export default Balance
