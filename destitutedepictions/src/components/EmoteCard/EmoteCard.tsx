import { Badge, Box, Image, useToast } from '@chakra-ui/react'
import { writeText } from '@tauri-apps/api/clipboard'

import { Emote } from '../../types/emotes'

interface EmoteCardProps {
    data: Emote
}
export const EmoteCard = ({ data }: EmoteCardProps) => {
    const copyToast = useToast()

    const copyEmote = async () => {
        await writeText(data.url)

        copyToast({
            title: 'Emote copied',
            description: 'Emote url was added to clipboard',
            status: 'success',
            duration: 1200,
            isClosable: true,
        })
    }

    return (
        <Box
            borderWidth="1px"
            borderRadius="lg"
            _hover={{ borderColor: 'teal', cursor: 'pointer' }}
            _active={{ background: 'teal' }}
            onClick={copyEmote}
        >
            <Box py="2" className="fuck-me">
                <Box display="flex" alignItems="baseline" justifyContent="center">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        {data?.size ? `Size: ${data?.size}` : ''}
                    </Badge>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center">
                <Image src={data.url} alt={data?.alt} />
            </Box>
            <Box
                textAlign="center"
                mt="2"
                fontWeight="semibold"
                as="h4"
                fontSize={{ sm: 12, md: 16, lg: 18, xl: 20 }}
                noOfLines={1}
            >
                {data.name}
            </Box>
        </Box>
    )
}

// const Popup
