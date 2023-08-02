// ** MUI Imports
import Card from '@mui/material/Card'
import Zoom from '@mui/material/Zoom'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import CardContent from '@mui/material/CardContent'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

const LightTooltip = styled(props => <Tooltip {...props} classes={{ popper: props.className }} sx={{ mr: 4 }} />)(
  ({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      borderRadius: 4,
      boxShadow: theme.shadows[2],
      color: theme.palette.common.black,
      backgroundColor: theme.palette.common.white,
      '& .MuiTooltip-arrow': {
        color: theme.palette.common.white
      }
    }
  })
)

const CardTooltip = () => {
  return (
    <Card>
      <CardContent>
        <Tooltip title='Tooltip' sx={{ mr: 4 }}>
          <Button variant='outlined'>Button</Button>
        </Tooltip>
        <LightTooltip title='Light'>
          <Button variant='outlined'>Light</Button>
        </LightTooltip>
        <Tooltip arrow title='Arrow' sx={{ mr: 4 }}>
          <Button variant='outlined'>Arrow</Button>
        </Tooltip>
        <Tooltip TransitionComponent={Zoom} title='Zoom'>
          <Button variant='outlined'>Zoom</Button>
        </Tooltip>
      </CardContent>
    </Card>
  )
}

export default CardTooltip
