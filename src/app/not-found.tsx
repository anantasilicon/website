import { Container, Eyebrow } from "@/components/page-parts";
import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <Container className="py-24">
      <Eyebrow>404</Eyebrow>
      <h1 className="mt-6 text-4xl leading-tight">That page does not exist.</h1>
      <div className="mt-8">
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </Container>
  );
}
