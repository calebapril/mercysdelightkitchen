import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumb = ({ breadcrumbData }) => {
  return (
    <Breadcrumb className="mb-5">
      <BreadcrumbList>
        {breadcrumbData.length > 0 &&
          breadcrumbData.map((data, index) => {
            return index !== breadcrumbData.length - 1 ? (
              <div key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={data.href}>{data.label}</BreadcrumbLink>
                  <BreadcrumbSeparator />
                </BreadcrumbItem>
              </div>
            ) : (
              <div key={index}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={data.href}>{data.label}</BreadcrumbLink>
                </BreadcrumbItem>
              </div>
            );
          })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumb;

