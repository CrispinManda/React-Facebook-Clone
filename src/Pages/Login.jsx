// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// Define your validation schema using yup
const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});

const dummyUser = {
  email: 'user@example.com',
  password: 'password123',
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema), // Apply yup validation schema
  });

  const onSubmit = (data) => {
    if (data.email === dummyUser.email && data.password === dummyUser.password) {
      navigate('/profile');
    } else {
      navigate('/');
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center">Login</h2>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Form.Control type="email" {...field} isInvalid={!!errors.email} />
                )}
              />
              <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <Form.Control type="password" {...field} isInvalid={!!errors.password} />
                )}
              />
              <Form.Control.Feedback type="invalid">{errors.password?.message}</Form.Control.Feedback>
            </Form.Group>

            <Button className='mt-3' variant="primary" type="submit">
              Login
            </Button >
            <p className="mt-2">
              Don't have an account? <Link to="/">Register</Link>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
