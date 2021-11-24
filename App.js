import {useState} from 'react';
import './App.css';
import {Link, Route, Routes, BrowserRouter} from 'react-router-dom';
import App_hello from './App_hello'

function App() {
	//Creamos una variable nombre, que luego nos aparesca en el input
	let [nombre, setNombre] = useState("")

	//Para que aparece el texto arriba del input
	let [array, setArray] = useState(["Introduce ", "tu ", "nombre ", "por favor: "])

	function cambiarNombre(event) {
		setNombre(event.target.value)
	}

	return (
		<BrowserRouter>
		{
			array.map(function(arrayElement) {
				return(<span>{arrayElement}</span>)
			})
		}
		<div>
			<input type="text" value={nombre} onChange={cambiarNombre}/>
			<button onClick={()=>{
				setNombre("");
				alert(nombre);
			}}>Click</button>
			<Link to = '/saludo'>Saludo</Link>
		</div>
		<Routes>
			<Route path='/saludo' element={<App_hello/>}/>
		</Routes>
		</BrowserRouter>
	);
}

export default App;
