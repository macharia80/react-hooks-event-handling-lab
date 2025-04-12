// Code Keypad Component Here

function Keypad (){
    const handleInputChange = () =>{
        console.log("Entering password...")
    }
    return (
        <div>
            <input type='password'onChange={handleInputChange}/>
        </div>
    )
}

export default Keypad;