import { Box } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface ContainerProps {
    children: ReactNode
    className?: string
}

export const Container = ({ children, className }: ContainerProps) => {
    return (
        <Box px={4} className={`${className ? className : ''}`}>
            {children}
        </Box>
    )
}
