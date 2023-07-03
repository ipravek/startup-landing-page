import Image from "next/image";

export default function Testimonial() {
  return (
    <div className="mb-20">
      <h3 className="text-4xl text-center font-semibold">
        What our customers have to say
      </h3>
      <h2 className="text-lg text-center text-gray-400 p-2">
        Lorem ipsum dolor sit amet, tincidunt vestibulum.
      </h2>

      <div className="flex flex-col gap-10 p-2 md:flex md:flex-row">
        <Card
          name="Sophia Armstrong"
          designation="CEO"
          image={
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          }
        />
        <Card
          designation="LEAD"
          name="Albert E"
          image={
            "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          }
        />
        {/* <Card
          designation="ASSOCIATE"
          name="Austin S"
          image={
            "https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80"
          }
        /> */}
        <Card
          name="Jackie"
          designation="CEO"
          image={
            "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
          }
        />
        <Card
          designation="CEO/CTO"
          name="Julie Sharon"
          image={
            "https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          }
        />
      </div>
    </div>
  );
}

const Card = ({
  body,
  name = "Name here",
  designation = "Designation here",
  image,
}) => {
  return (
    <div className="bg-gray-100 rounded p-4">
      <div className="image flex justify-center h-[70px] m-3">
        {image ? (
          <Image
            src={image}
            alt=""
            width={70}
            height={70}
            className="rounded-[50%] object-cover"
          />
        ) : (
          <div className="w-[70x] h-[70px] bg-gray-400 rounded-full">1231</div>
        )}
      </div>

      <div className="text-center">
        {body ? (
          body
        ) : (
          <>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Porrovoluptas hic doloribus inventore consequatur omnis minus
            debitisfugit corrupti error?
          </>
        )}
      </div>

      <div className="p-2">
        <div className="font-semibold text-center">{name}</div>
        <div className="separator flex justify-center">
          <div className="border-b-2 border-blue-900 w-1/2 rounded m-1"></div>
        </div>
        <div className="text-grey-400 text-sm text-center">{designation}</div>
      </div>
    </div>
  );
};
