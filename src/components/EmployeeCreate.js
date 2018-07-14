import React, { Component } from 'react';
import Card from './commons/Card';
import CardSection from './commons/CardSection';
import Input from './commons/Input';
import Button from './commons/Button';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-555"
                    />
                </CardSection>

                <CardSection>
                </CardSection>

                <CardSection>
                    <Button>
                  Create
                    </Button>
                </CardSection>                                          
            </Card>
        );
    }
}

export default EmployeeCreate;