import React from 'react'
import MaterialUI from './Components/MaterialUI'
import VariantButtonGroup from './Components/ButtonGroup'
import { Checkbox } from '@mui/material'
import FloatingButton from './Components/FloatingButton'
import RadioButtonsGroup from './Components/RadioGroup'
import BasicRating from './Components/RatingGroup'
import SelectOtherProps from './Components/BasicSelect'
import ContinuousSlider from './Components/VolumeSlider'
import BasicSwitches from './Components/BasicSwitches'
import CustomizedDividers from './Components/ToggleButton'
import Spinner from './Components/Spinner'
import SimpleAccordion from './Components/SnackBar'
import ResponsiveAppBar from './Components/NavBar'
import OutlinedCard from './Components/AppBar'
import TemporaryDrawer from './Components/MUIDrawer'
import BasicModal from './Components/Modal'
import DataGridProDemo from './Components/DataGrid'


const App = () => {
  return (
    <div>
      <ResponsiveAppBar />

      <MaterialUI />

      <VariantButtonGroup />

      <Checkbox />

      <FloatingButton />

      <RadioButtonsGroup />

      <BasicRating />

      <SelectOtherProps />

      <ContinuousSlider />

      <BasicSwitches />

      <CustomizedDividers />

      <Spinner />

      <SimpleAccordion />

      <OutlinedCard />

      <TemporaryDrawer />

      <BasicModal />

      <DataGridProDemo />
    </div>
  )
}

export default App