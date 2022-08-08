import { AddIcon, EditIcon, ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons'
import { Box, IconButton, Kbd, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

export const FloatingActionButton = () => {
    // return <IconButton icon={<AddIcon/>}/>

    const addEmoticon = () => {
        // custom logic for opening modal to add emoticon to local
    }
    return (
        <Box position="fixed" zIndex={10} bottom="4" right="8">
            <Menu placement="top">
                <MenuButton
                    as={IconButton}
                    aria-label="Options"
                    icon={<AddIcon />}
                    variant="solid"
                    colorScheme="teal"
                    borderRadius="100%"
                    boxShadow="xl"
                />
                <MenuList>
                    <MenuItem icon={<AddIcon />}>
                        Add Emoticon &nbsp;
                        <span>
                            <Kbd>ctrl + N</Kbd> / <Kbd>⌘N</Kbd>
                        </span>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
    )
}
