import { Box, Container, Heading, ListItem, OrderedList, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Container py={10} name='test2' maxWidth={'container.xl'} textAlign={'center'} lineHeight={'110%'}>
            <Text fontFamily={'Work Sans'}
                fontWeight={'bold'}
                fontSize={20}
                textTransform={'uppercase'}
                color={'purple.400'}>
                Welcome to
            </Text>
            <Heading py={5}
                fontSize={48}
                fontFamily={'Work Sans'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.700', 'gray.50')}>SyncApp Technologies</Heading>
            <Text margin={'auto'}
                width={'70%'}
                fontFamily={'Inter'}
                fontWeight={'medium'}
                color={useColorModeValue('gray.500', 'gray.400')}>Your Gateway to Digital Success!
            </Text>

            <Text p={['10']} py={4} textAlign={'justify'} lineHeight={'6'} color={useColorModeValue('gray.600', 'gray.300')} fontSize={{ base: 'sm', sm: 'lg' }}>
                At SyncApp Technologies, we are a leading Delhi-based IT company that specializes in delivering cutting-edge technology solutions to businesses and organizations worldwide. With a passionate team of skilled professionals, we have earned a reputation for excellence in providing a comprehensive range of services tailored to meet our clients' diverse needs.
            </Text>
            <Text px={['10']} py={4} textAlign={'justify'} lineHeight={'6'} color={useColorModeValue('gray.600', 'gray.300')} fontSize={{ base: 'sm', sm: 'lg' }}>
                <Heading as={'span'} fontSize={{ base: 'sm', sm: 'lg' }}>Web App Development: </Heading>
                Our web app development services are designed to transform your ideas into feature-rich, responsive, and user-friendly web applications. From e-commerce platforms to enterprise-level systems, we craft bespoke solutions that ensure a seamless user experience and help you stay ahead in the digital landscape.
            </Text>
            <Text px={['10']} py={4} textAlign={'justify'} lineHeight={'6'} color={useColorModeValue('gray.600', 'gray.300')} fontSize={{ base: 'sm', sm: 'lg' }}>
                <Heading as={'span'} fontSize={{ base: 'sm', sm: 'lg' }}>Android and iOS Mobile App Development: </Heading>
                Embrace the mobile revolution with our top-notch Android and iOS mobile app development expertise. Our talented developers work diligently to create captivating, high-performance mobile applications that not only captivate your audience but also drive business growth and engagement.
            </Text>
            <Text px={['10']} py={4} textAlign={'justify'} lineHeight={'6'} color={useColorModeValue('gray.600', 'gray.300')} fontSize={{ base: 'sm', sm: 'lg' }}>
                <Heading as={'span'} fontSize={{ base: 'sm', sm: 'lg' }}>Search Engine Optimization (SEO): </Heading>
                With the ever-evolving digital landscape, visibility is crucial. Our SEO experts employ industry-leading strategies to optimize your online presence, boost organic traffic, and improve your website's ranking on search engine results pages. Enhance your online visibility and attract targeted audiences with our SEO prowess.
            </Text>
            <Text px={['10']} py={4} textAlign={'justify'} lineHeight={'6'} color={useColorModeValue('gray.600', 'gray.300')} fontSize={{ base: 'sm', sm: 'lg' }}>
                <Heading as={'span'} fontSize={{ base: 'sm', sm: 'lg' }}>Outsourcing Services: </Heading>
                Focus on your core business while we handle the rest. Our outsourcing services allow you to leverage our expertise in various domains, be it IT support, customer service, back-office operations, or any other business process outsourcing needs. Trust us to deliver exceptional results, so you can direct your attention to strategic growth initiatives.
            </Text>
            <Text px={['10']} py={4} textAlign={'justify'} lineHeight={'6'} color={useColorModeValue('gray.600', 'gray.300')} fontSize={{ base: 'sm', sm: 'lg' }}>
                <Heading as={'span'} fontSize={{ base: 'sm', sm: 'lg' }}>AI Integration: </Heading>
                Stay ahead of the competition with our AI integration services. Harness the power of artificial intelligence to automate tasks, analyze data, and make informed decisions. Our AI solutions are geared towards enhancing productivity, reducing costs, and offering personalized experiences to your customers.
            </Text>
            <Heading py={5}
                fontSize={32}
                fontFamily={'Work Sans'}
                fontWeight={'bold'}
                color={useColorModeValue('gray.700', 'gray.50')} > Why Choose SyncApp Technologies?</Heading>

            <OrderedList px={['10']} textAlign={'justify'} color={useColorModeValue('gray.600', 'gray.300')}>
                <ListItem py={4}>
                    <Heading as={'span'} fontSize={{ base: 'sm', sm: 'lg' }}>Expertise: </Heading>
                    Our team comprises skilled professionals who are experts in their respective domains. With years of experience under their belt, they are adept at tackling even the most complex challenges.
                </ListItem>
                <ListItem py={4}>
                    <Heading as={'span'} fontSize={{ base: 'sm', sm: 'lg' }}>Client-Centric Approach: </Heading>
                    We believe in building long-term partnerships with our clients. Our solutions are designed to align with your business goals, ensuring measurable results and sustainable growth.
                </ListItem>
                <ListItem py={4}>
                    <Heading as={'span'} fontSize={{ base: 'sm', sm: 'lg' }}>Innovation: </Heading>
                    We stay updated with the latest technological advancements and industry trends. Innovation is at the heart of everything we do, and we consistently strive to provide the best solutions to our clients.
                </ListItem>
                <ListItem py={4}>
                    <Heading as={'span'} fontSize={{ base: 'sm', sm: 'lg' }}>Quality Assurance: </Heading>
                    Delivering top-quality products and services is non-negotiable for us. Our rigorous quality assurance processes ensure that every deliverable is of the highest standard.
                </ListItem>
                <ListItem py={4}>
                    <Heading as={'span'} fontSize={{ base: 'sm', sm: 'lg' }}>Timely Delivery: </Heading>
                    We understand the importance of time in business. Our team is committed to delivering projects within stipulated deadlines without compromising on quality.
                </ListItem>
            </OrderedList>
            <Text px={['10']} py={4} textAlign={'justify'} lineHeight={'6'} color={useColorModeValue('gray.600', 'gray.300')} fontSize={{ base: 'sm', sm: 'lg' }}>
                At SyncApp Technologies, we aim to be your one-stop destination for all your IT needs. Our holistic approach to web app development, mobile app development, SEO, ERP solutions, outsourcing services, and AI integration sets us apart as a reliable and trusted partner. Join hands with us, and together, we'll embark on a journey towards digital success. Contact us today to turn your visions into reality!
            </Text>

        </Container>
    )
}

export default About