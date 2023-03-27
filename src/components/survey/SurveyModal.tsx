import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react'
import Link from 'next/link'

export default function SurveyModal({ isOpen, onClose, modalData }) {
  const { title, description } = modalData || {}

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>
          <Box w="full" h="full">
            <Box pt="3">
              <Box mt="3" fontWeight="semibold" as="h4" lineHeight="tight">
                {description}
              </Box>
              <Box></Box>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Link href="/survey/1">
            <Button variant="primary" size="lg">
              Begin Survey
            </Button>
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
