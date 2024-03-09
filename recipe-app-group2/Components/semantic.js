import React from 'react'
import { Card } from 'semantic-ui-react';
import { ButtonContent, Button, Icon, Container, Header  } from 'semantic-ui-react'
import styles from "@/styles/indexstyle.module.scss";
import 'semantic-ui-css/semantic.min.css'
import Link from 'next/link';

const ButtonExampleAnimated = () => (
    <div>
        <Button animated>
          <ButtonContent visible>Learn More</ButtonContent>
          <ButtonContent hidden>
            <Icon name='arrow right' />
          </ButtonContent>
        </Button>
    </div>
)


const ContainerExampleText = () => (
    <Container text>
      <Header as='h2'>Header</Header>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        
      </p>
     
    </Container>
  )


  export { ButtonExampleAnimated, ContainerExampleText,}