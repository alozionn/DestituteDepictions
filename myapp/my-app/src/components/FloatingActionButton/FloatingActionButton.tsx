import { AddIcon, EditIcon, ExternalLinkIcon, RepeatIcon } from '@chakra-ui/icons'
import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

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
                />
                <MenuList>
                    <MenuItem icon={<AddIcon />} command="CTRL+N / ⌘N">
                        Add Emoticon
                    </MenuItem>
                    {/* <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                        New Window
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                        Open Closed Tab
                    </MenuItem>
                    <MenuItem icon={<EditIcon />} command="⌘O">
                        Open File...
                    </MenuItem> */}
                </MenuList>
            </Menu>
        </Box>
    )
}
