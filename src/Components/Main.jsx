import "../App.css"
export default function Main() {
    return (
        <main>
            <form>
        <h2 class="section-title">Text to translate <span>👇</span></h2>
        <textarea placeholder="How are you?"></textarea>

        <h2 class="section-title">Select language <span>👇</span></h2>
        <div class="choices">
            <label>
                <input type="radio" name="language" value="french"/>
                French 🇫🇷
            </label>
            <label>
                <input type="radio" name="language" value="spanish" />
                Spanish 🇪🇸
            </label>
            <label>
                <input type="radio" name="language" value="japanese" />
                Japanese 🇯🇵
            </label>
        </div>

        <button type="submit">Translate</button>
    </form>
        </main>
    )
}