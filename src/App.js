
import Login  from "./Login";
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import EmployeeListing from "./pages/ManageEmployee";
import SubmissionListing from "./pages/SubmissionListing";
import CandidateListing from "./pages/CandidateListing";
import UC from "./pages/UC";
import { ThemeProvider } from '@fluentui/react';
import {UserProvider} from './contexts/UserProvider'
import {darkTheme} from './themes'
import Layout from "./Layout";
import DemandListing from "./pages/DemandListing";



function App() {


 

  return (
    <div>
      <ThemeProvider >
        <BrowserRouter>
         

          <UserProvider>
            <Routes>
              <Route index element={<Login/>}/>

              <Route path='/login' element={<Login/>}/>

              <Route path='dashboard' element={<Layout/>} >
                <Route index element={<UC/>}/> 
              </Route>  

              <Route path='demandreport' element={<Layout/>}>
                  <Route path='adddemands' element={<UC/>}/>
                  <Route path='managedemands' element={<DemandListing/>}/>
                  <Route path='demandstatus' element={<UC/>}/>
              </Route>

              
              <Route path='submissionlisting' element={<Layout/>}>
                <Route index element={<SubmissionListing/>}/> 
              </Route>

              <Route path='candidate' element={<Layout/>}>
                  <Route path='addcandidate' element={<UC/>}/>
                  <Route index path='viewsubmission' element={<CandidateListing/>}/>
              </Route>

              <Route path='reports' element={<Layout/>}>
                  <Route path='recruitersubmission' element={<UC/>}/>
                  <Route path='leaddemand' element={<UC/>}/>
                  <Route path='accountmanager' element={<UC/>}/>
                  <Route path='clientreport' element={<UC/>}/>
                  <Route path='subvendorsubmission' element={<UC/>}/>
                  <Route path='clientreportcount' element={<UC/>}/>
              </Route>

              <Route path='masterpage' element={<Layout/>}>
                  <Route path='addskills' element={<UC/>}/>
                  <Route path='addlocation' element={<UC/>}/>
                  <Route path='addclient' element={<UC/>}/>
                  <Route path='addsubmissionstatus' element={<UC/>}/>
                  <Route path='addsubvendor' element={<UC/>}/>
              </Route>


              <Route path='teammanagement' element={<Layout/>}>
                  <Route path='addemployee' element={<UC/>}/>
                  <Route path='manageemployee' element={<EmployeeListing/>}/>
                  <Route path='assignemployee' element={<UC/>}/>
              </Route>

            </Routes>
          </UserProvider>
        </BrowserRouter>



      </ThemeProvider>

     



    </div>
  );
}

export default App;
