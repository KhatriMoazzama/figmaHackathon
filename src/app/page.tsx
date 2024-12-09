import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/smallComponents/card";

export default function Home() {
  return (
    <div className="bg-[#f6f7f9] min-h-screen p-4 sm:p-6 lg:p-20 flex flex-col gap-10 font-[family-name:var(--font-geist-sans)]">
      
      <section className="first w-full flex flex-wrap sm:flex-nowrap gap-4 sm:gap-8 justify-center">
        <Image 
          src={"/Ads 1.png"} 
          alt="" 
          width={640} 
          height={360} 
          className="max-w-full hover:scale-105 transition-transform duration-300" 
        />
        <Image 
          src={"/Ads 2.png"} 
          alt="" 
          width={640} 
          height={360} 
          className="max-w-full hover:scale-105 transition-transform duration-300" 
        />
      </section>

      <section className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8">
        <Image 
          src={"/Pick - Up.png"} 
          alt="" 
          width={582} 
          height={132} 
          className="max-w-full hover:scale-105 transition-transform duration-300" 
        />
        <Image 
          src={"/Switch.png"} 
          alt="" 
          width={60} 
          height={60} 
          className="max-w-full hover:rotate-90 transition-transform duration-300" 
        />
        <Image 
          src={"/Drop - Off.png"} 
          alt="" 
          width={582} 
          height={132} 
          className="max-w-full hover:scale-105 transition-transform duration-300" 
        />
      </section>

      <section className="popular w-full flex flex-col gap-4">
        <div className="first w-full flex items-center justify-between">
          <h1 className="text-gray-500 text-lg sm:text-xl">Popular Car</h1>
          <Link href={"/carCard"}>
            <h1 className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9] transition-colors duration-300">
              View All
            </h1>
          </Link>
        </div>
        <div className="sec grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                Koenigsegg <Image src={"/heart.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car (3).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#274db8] transition-colors duration-300">Rent Now</button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="w-full max-w-[304px] mx-auto h-auto flex flex-col justify-between hover:shadow-lg hover:scale-105 transition-transform duration-300">
            <CardHeader>
              <CardTitle className="w-full flex items-center justify-between">
                NissanGT - R <Image src={"/heart 2.png"} alt="" width={20} height={20} />
              </CardTitle>
              <CardDescription>Sport</CardDescription>
            </CardHeader>
            <CardContent className="w-full flex flex-col items-center justify-center gap-4">
              <Image src={"/car (2).png"} alt="" width={220} height={68} />
              <Image src={"/Spesification.png"} alt="" width={256} height={24} />
            </CardContent>
            <CardFooter className="w-full flex items-center justify-between">
              <p>
                $99.00/<span className="text-gray-500">day</span>
              </p>
              <Link href={'/payment'}>
                <button className="bg-[#3563e9] p-2 text-white rounded-md hover:bg-[#274db8] transition-colors duration-300">Rent Now</button>
              </Link>
            </CardFooter>
          </Card>

          {/* Add similar hover effects to other cards here */}
        </div>
      </section>

      <section className="button w-full text-center">
        <Link href={"/carRent"}>
          <button className="bg-[#3563e9] px-4 py-2 text-white rounded-md mt-5 hover:bg-[#274db8] transition-colors duration-300">
            Show More Cars
          </button>
        </Link>
      </section>
    </div>
  );
}
