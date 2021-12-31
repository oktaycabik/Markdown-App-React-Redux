
import {marked} from "marked"
import { useSelector,useDispatch} from "react-redux";
import { setMarkdown,setFirstData} from "./redux/markdown/markdownSlice";
import {BsQuestionSquare} from "react-icons/bs"
function App() {
  
  let text = useSelector(state => state.markdown.item)
  let first = useSelector(state => state.markdown.firstdata)
  const dispatch = useDispatch()
  const parsedText = marked(text);
    const ara = { __html: parsedText };
    const handleClick=()=>{
    dispatch(setFirstData(first))
    }
  return (
    <div>
      <div className="main-content">
        <header>
          <h1 className="app-title">Markdown Previewer</h1>
          <div className="end" 
  
          
          >
          <button onClick={()=>handleClick()}> <BsQuestionSquare  size={40}/>   </button> 
          </div>
        </header>

        <div className="text-panels">
          <textarea value={text}   onChange={(e)=>dispatch(setMarkdown(e.target.value))} className="text-panel-left"></textarea>
          <div dangerouslySetInnerHTML={ara} className="text-panel-right"></div>
        </div>

        <footer>
          <div>
            2017, created by{" "}
            <a target="blank" href="https://github.com/GuRuGuMaWaRu">
              Peter Krevenets
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
