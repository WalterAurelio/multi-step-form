import { Route, Routes } from "react-router-dom";
import PersonalInfo from "./pages/PersonalInfoForm";
import SelectPlanForm from "./pages/SelectPlanForm";
import AddOnsForm from "./pages/AddOnsForm";
import SummaryForm from "./pages/SummaryForm";
import BannerLayout from "./layout/BannerLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BannerLayout />}>
        <Route index element={<PersonalInfo />} />
        <Route path="/select-plan" element={<SelectPlanForm />} />
        <Route path="/add-ons" element={<AddOnsForm />} />
        <Route path="/summary" element={<SummaryForm />} />
      </Route>
    </Routes>
  )
}

export default App;