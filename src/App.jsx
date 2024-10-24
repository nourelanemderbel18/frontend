

import { BrowserRouter as Router,Routes, Route } from "react-router-dom"; 
import Listarticles from "./components/articles/Listarticles";
import InsertArticle from "./components/articles/InsertArticle";
import EditArticle from "./components/articles/EditArticle";
import ViewArticle from "./components/articles/ViewArticle";
import ListCategorie from "./components/categories/ListCategorie";
import EditCategorie from "./components/categories/EditCategorie";
import InsertCategorie from "./components/categories/InsertCategorie";
import ViewCategorie from "./components/categories/ViewCategorie";
import Listscategorie from "./components/scategories/Listscategorie";
import Editscategorie from "./components/scategories/Editscategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Viewscategorie from "./components/scategories/Viewscategorie";
import Menu from "./components/Menu"

function App() {
 

  return (
    <>
      <Router>
        <Menu>
           
        </Menu>
        <Routes>
          <Route path="/articles" element={<Listarticles  />} />
          <Route path="/articles" element={<InsertArticle />} />
          <Route path="/articles" element={<EditArticle  />} />
          <Route path="/articles" element={<ViewArticle />} />
          <Route path="/categories" element={<ListCategorie/>}/>
          <Route path="/categories" element={<EditCategorie/>}/>
          <Route path="/categories" element={<InsertCategorie/>}/>
          <Route path="/categories" element={<ListCategorie/>}/>
          <Route path="/categories" element={<ViewCategorie/>}/>
          <Route path="/scategories" element={<Listscategorie/>}/>
          <Route path="/scategories" element={<Editscategorie/>}/>
          <Route path="/scategories" element={<Insertscategorie/>}/>
          <Route path="/scategories" element={<Viewscategorie/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
