import { Box, Text, Link } from '@chakra-ui/react'
import { openExternalLink } from '../utils/electronUtils'

const Footer = () => {
  const handleOpenGitHub = () => {
    openExternalLink('https://github.com/DenysHarkavenko')
  }

  const handleOpenSupport = () => {
    openExternalLink('https://send.monobank.ua/7Ec5oYiQbw')
  }
  return (
    <Box bg='#40827A' borderTop='3px solid #1BDCD0' p='0 5px'>
      <Text display='inline'>You can find developer: </Text>
      <Link onClick={handleOpenGitHub} fontWeight='500'>
        Here (GitHub)
      </Link>
      <Text display='inline' ml='3px'>
        or use this link for
      </Text>
      <Link onClick={handleOpenSupport} ml='3px' fontWeight='500'>
        support
      </Link>
    </Box>
  )
}

export default Footer
