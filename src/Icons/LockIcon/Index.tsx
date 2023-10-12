import LockPersonIcon from '@mui/icons-material/LockPerson';
interface LockIconProps {
    fontsize: string,
    color:string;
}

export const LockIcon = ({fontsize,color}:LockIconProps) => {
    return <LockPersonIcon fontSize={fontsize} style={{color:color}}/>
}