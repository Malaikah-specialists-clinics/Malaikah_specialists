import { Formik } from 'formik';
import { Form , Row, Col, InputGroup, Button} from 'react-bootstrap';
import * as yup from 'yup';



const schema = yup.object().shape({
 
  name: yup.string().required(),
  email: yup.string().required(),
});

function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        email: '',
        
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
           
            <Form.Group as={Col} md="4" controlId="validationFormikUsername">
              <Form.Label>name</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  please fill in your name
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.email}
                onChange={handleChange}
                isInvalid={!!errors.email}
              />

              <Form.Control.Feedback type="invalid">
                fill in Email
              </Form.Control.Feedback>
            </Form.Group>
            
            
          </Row>
          <Button type="submit">Submit form</Button>
        </Form>
      )}
    </Formik>
  );
}

export default (<FormExample />);
