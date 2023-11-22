import React from 'react';
import Button from '@mui/material/Button'
import Icon from '@mui/material/Icon';

type StyledButtonProps = {
    icon: string;
}


function StyledButton({icon}: StyledButtonProps) { 

    return (
        <Button
            variant="contained"
            color="darkButtons"
            sx={{
                '&:hover': {
                  '& .MuiIcon-root': {
                    color: '#f0f0f0',
                  },
                },
            }}
            
        >
            <Icon sx={{ color: 'inherit'}}>{icon}</Icon>
        </Button>
    );

}

export default StyledButton