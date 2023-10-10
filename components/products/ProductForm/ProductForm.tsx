"use client";
import { Button } from "@/components/ui/button";
import { DownloadIcon, PenIcon, PrinterIcon } from "lucide-react";
import DownloadDetails from "./DownloadDetails";
import { useEffect, useState } from "react";
import PrintDetails from "./PrintDetails";
import HireDesignerForm from "./HireDesignerForm";
import { ProductPriceDetails } from "@/app/products/[slug]/page";

enum DetailType {
  download = "download",
  print = "print",
  hire = "hire",
}

export default function ProductForm({
  imageDetails,
  isAuthenticated,
  priceDetails,
  customFields
}: {
  imageDetails: any;
  isAuthenticated: boolean;
  priceDetails: ProductPriceDetails;
  customFields: any
}) {
  const [detailType, setDetailType] = useState<DetailType>(DetailType.download);


  /**
   * If actions [download, print, hire] is provided in URL params, than show that page
   * to the user. The format is ?action=download
   */

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const action = params.get("action") as DetailType
    if (action && Object.keys(DetailType).includes(action)) {
      setDetailType(action)
    }
  }, [])



  return (
    <div className="pt-[1.6rem] border border-gray-300 rounded-md mt-2">
      {/* button controls */}
      <div className="w-full flex gap-3 items-center px-5 flex-wrap">
        <Button
          variant={"outline"}
          className={`flex gap-x-3 ${detailType === DetailType.download && "text-white bg-lime-600"
            }`}
          onClick={() => setDetailType(DetailType.download)}
        >
          <DownloadIcon size={15} /> Download
        </Button>
        <Button
          variant={"outline"}
          className={`flex gap-x-3 ${detailType === DetailType.print && "text-white bg-lime-600"
            }`}
          onClick={() => setDetailType(DetailType.print)}
        >
          <PrinterIcon size={15} /> Print
        </Button>
        <Button
          variant={"outline"}
          className={`flex gap-x-3 ${detailType === DetailType.hire && "text-white bg-lime-600 "
            }`}
          onClick={() => setDetailType(DetailType.hire)}
        >
          <PenIcon size={15} /> Hire Designer
        </Button>
      </div>

      {/* details */}

      {detailType === DetailType.download && (
        <DownloadDetails
          imageDetails={imageDetails}
          isAuthenticated={isAuthenticated}
          priceDetails={priceDetails}
          customFields={customFields}
        />
      )}
      {detailType === DetailType.print && (
        <PrintDetails
          imageDetails={imageDetails}
          isAuthenticated={isAuthenticated}
          priceDetails={priceDetails}
          customFields={customFields}
        />
      )}
      {detailType === DetailType.hire && <HireDesignerForm />}
    </div>
  );
}
