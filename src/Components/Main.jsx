import { useState } from "react"
import "../App.css"
export default function Main() {

    const [formData, setFormData] = useState({ language: "french", text: ""})
    const [error, setError] = useState("")

    const handleInputChange = (e) => { 
        setFormData({ ...formData, [e.target.name]: e.target.value })
        console.log(formData)
        setError("")
    }

    const translate = () => {}

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if(!formData.text) {
            setError("Please enter the text.")
            return
        }
        translate()
    }
    return (
        <main>
            <form onSubmit={handleOnSubmit}>
                <h2 class="section-title">Text to translate <span>👇</span></h2>

                <textarea 
                    placeholder="How are you?" 
                    name="text" 
                    onChange={handleInputChange}>
                </textarea>

                <h2 class="section-title">Select language <span>👇</span></h2>
                <div class="choices">
                    <label>
                        <input 
                            type="radio" 
                            name="language" 
                            value="french" 
                            defaultChecked={formData.language} 
                            onChange={handleInputChange}/>
                        French 🇫🇷
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="language" 
                            value="spanish" 
                            onChange={handleInputChange}/>
                        Spanish 🇪🇸
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="language" 
                            value="japanese" 
                            onChange={handleInputChange}/>
                        Japanese 🇯🇵
                    </label>
                </div>
                {error && <div>{error}</div>}
                <button type="submit">Translate</button>
            </form>
        </main>
    )
}