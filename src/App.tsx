import { Route, Routes } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfoForm";
import SelectPlanForm from "./pages/SelectPlanForm";
import AddOnsForm from "./pages/AddOnsForm";
import FinishUpForm from "./pages/FinishUpForm";
import BannerLayout from "./layout/BannerLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BannerLayout />}>
        <Route index element={<PersonalInfo />} />
        <Route path="/select-plan" element={<SelectPlanForm />} />
        <Route path="/add-ons" element={<AddOnsForm />} />
        <Route path="/summary" element={<FinishUpForm />} />
      </Route>
    </Routes>
  )
}

export default App;