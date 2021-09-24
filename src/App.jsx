import './App.css';

import './lib/components/styles/colors.css'

import {Button, Title, Link, Navbar} from './lib/main'

function App() {
  return (
    <div className="App">

      <table>
        <thead>
          <tr>
            <th>X</th>
            <th>Primary</th>
            <th>Secondary</th>
            <th>Primary Outline</th>
            <th>Secondary Outline</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th><span>Avec serif</span></th>
            <td><Button label="Click on me" type="primary" outline serif/></td>
            <td><Button label="Click on me" type="secondary" outline serif/></td>
            <td><Button label="Click on me" type="primary" serif/></td>
            <td><Button label="Click on me" type="secondary" serif/></td>
          </tr>

          <tr>
            <th><span>Sans serif</span></th>
            <td><Button label="Click on me" type="primary" outline/></td>
            <td><Button label="Click on me" type="secondary" outline/></td>
            <td><Button label="Click on me" type="primary"/></td>
            <td><Button label="Click on me" type="secondary"/></td>
          </tr>

          <tr>
            <th><span>Avec serif Slim</span></th>
            <td><Button label="Click on me" type="primary" outline serif slim/></td>
            <td><Button label="Click on me" type="secondary" outline serif slim/></td>
            <td><Button label="Click on me" type="primary" serif slim/></td>
            <td><Button label="Click on me" type="secondary" serif slim/></td>
          </tr>

          <tr>
            <th><span>Sans serif Slim</span></th>
            <td><Button label="Click on me" type="primary" outline slim/></td>
            <td><Button label="Click on me" type="secondary" outline slim/></td>
            <td><Button label="Click on me" type="primary" slim/></td>
            <td><Button label="Click on me" type="secondary" slim/></td>
          </tr>


        </tbody>
      </table>

      <Title priority="1" label="H1 Hello World!" type="primary"/>
      <Title priority="1" label="H1 Hello World!" type="primary" serif/>
      <Title priority="2" label="H2 Hello World!" type="secondary"/>
      <Title priority="2" label="H2 Hello World!" type="secondary" serif/>
      <Title priority="3" label="H3 Hello World!" type="primary"/>
      <Title priority="3" label="H3 Hello World!" type="primary" serif/>
      <Title priority="4" label="H4 Hello World!" type="secondary"/>
      <Title priority="4" label="H4 Hello World!" type="secondary" serif/>
      <Title priority="5" label="H5 Hello World!" type="primary"/>
      <Title priority="5" label="H5 Hello World!" type="primary" serif/>
      <Title priority="6" label="H6 Hello World!" type="secondary"/>
      <Title priority="6" label="H6 Hello World!" type="secondary" serif/>


      <table>
        <tr>
            <th>X</th>
            <th>Primary</th>
            <th>Secondary</th>
          </tr>
          <tr>
            <th><span>Avec serif</span></th>
            <td><Link href="https://google.fr" label="Clique moi" type="primary" newtab serif/></td>
            <td><Link href="https://google.fr" label="Clique moi" type="secondary" newtab serif/></td>
          </tr>

          <tr>
            <th><span>Sans serif</span></th>
            <td><Link href="https://google.fr" label="Clique moi" type="primary" newtab/></td>
            <td><Link href="https://google.fr" label="Clique moi" type="secondary" newtab/></td>
          </tr>
      </table>

      <br />

      <Navbar outline/>
      <br />
      <Navbar/>
      <br />
      <br />
      <Navbar outline github/>
      <br />
      <Navbar github/>
      <br />
      <br />
      <Navbar outline twitter github/>
      <br />
      <Navbar twitter github/>
      
    </div>
  );
}

export default App;
