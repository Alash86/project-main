import Input from "../components/common/input";
import PageHeader from "../components/common/pageHeader";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth.context";
import Checkbox from "../components/common/checkbox";
import useSignUp from "../components/hooks/useSignUp";

function SignUp() {
  const { user } = useAuth();
  const { form, serverError } = useSignUp();

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container">
      <PageHeader
        title="Sign Up"
        description="Open a new account ,we would love to have you with us"
      />

      <form
        className="d-flex flex-wrap gap-5 m-5 text-justify "
        onSubmit={form.handleSubmit}
        noValidate
        autoComplete="off"
      >
        {serverError && (
          <div className="alert alert-danger ">{serverError}</div>
        )}

        <Input
          {...form.getFieldProps("name.first")}
          type="text"
          label="First Name"
          placeholder="First Name"
          required
          error={form.touched.name?.first && form.errors["name.first"]}
        />
        <Input
          {...form.getFieldProps("name.middle")}
          type="text"
          label="Middle Name"
          placeholder="Middle Name"
          error={form.touched.name?.middle && form.errors["name.middle"]}
        />
        <Input
          {...form.getFieldProps("name.last")}
          type="text"
          label="Last Name"
          placeholder="Last Name"
          required
          error={form.touched.name?.last && form.errors["name.last"]}
        />
        <Input
          {...form.getFieldProps("phone")}
          type="text"
          label="Phone"
          required
          error={form.touched.phone && form.errors.phone}
        />
        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          placeholder="john@doe.com"
          required
          error={form.touched.email && form.errors.email}
        />
        <Input
          {...form.getFieldProps("password")}
          type="password"
          label="Password"
          required
          error={form.touched.password && form.errors.password}
        />
        <Input
          {...form.getFieldProps("image.url")}
          type="text"
          label="Image url"
          placeholder="Image url"
          error={form.touched.image?.url && form.errors["image.url"]}
        />
        <Input
          {...form.getFieldProps("image.alt")}
          type="text"
          label="Image alt"
          placeholder="Image alt"
          error={form.touched.image?.alt && form.errors["image.alt"]}
        />
        <Input
          {...form.getFieldProps("address.state")}
          type="text"
          label="state"
          placeholder="state"
          error={form.touched.address?.state && form.errors["address.state"]}
        />
        <Input
          {...form.getFieldProps("address.country")}
          type="text"
          label="country"
          required
          placeholder="country"
          error={
            form.touched.address?.country && form.errors["address.country"]
          }
        />
        <Input
          {...form.getFieldProps("address.city")}
          type="text"
          label="city"
          required
          placeholder="city"
          error={form.touched.address?.city && form.errors["address.city"]}
        />
        <Input
          {...form.getFieldProps("address.street")}
          type="text"
          label="street"
          required
          placeholder="street"
          error={form.touched.address?.street && form.errors["address.street"]}
        />
        <Input
          {...form.getFieldProps("address.houseNumber")}
          type="number"
          label="house number"
          required
          placeholder="house number"
          error={
            form.touched.address?.houseNumber &&
            form.errors["address.houseNumber"]
          }
        />
        <Input
          {...form.getFieldProps("address.zip")}
          type="number"
          label="zip"
          required
          placeholder="zip"
          error={form.touched.address?.zip && form.errors["address.zip"]}
        />
        <Checkbox
          {...form.getFieldProps("isBusiness")}
          type="checkbox"
          label="Sign up as Business"
        />

        <div className="my-2 p-3 mt-3">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary fs-4 "
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
