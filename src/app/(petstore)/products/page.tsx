import { Shell } from '@/components/Shell';
import { Breadcrumb } from '@/components/ui/breadcrumb';
import React from 'react';

export default function ProductsPage() {
	return (
		<div className="mx-auto w-full max-w-[1920px] p-4 md:px-12 md:pb-24 md:pt-4">
			{/* <Breadcrumbs category={category} /> */}
			<Breadcrumb className="mb-8" />
			<div className="md:mb-8 lg:flex lg:flex-row lg:items-center lg:justify-between">
				<h1 className="mb-4 text-4xl font-black lg:mb-0 lg:text-5xl">rerter</h1>

				<div className="flex flex-col items-center gap-3 whitespace-nowrap md:flex-row">
					{/* <MobileSideNav>
          <FacetedSearch
            facets={search.facets.items}
            headingId="mobile-filter-heading"
            pageType="category"
          >
            <SubCategories categoryTree={categoryTree} />
          </FacetedSearch>
        </MobileSideNav> */}
					<div className="flex w-full flex-col items-start gap-4 md:flex-row md:items-center md:justify-end md:gap-6">
						{/* <SortBy /> */}
						dfdf
						<div className="order-3 py-4 text-base font-semibold md:order-2 md:py-0">
							{/* {t('sortBy', { items: productsCollection.collectionInfo?.totalItems ?? 0 })} */}
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-8">
				{/* <FacetedSearch
        className="mb-8 hidden lg:block"
        facets={search.facets.items}
        headingId="desktop-filter-heading"
        pageType="category"
      >
        <SubCategories categoryTree={categoryTree} />
      </FacetedSearch> */}
				fhfghfh
				<section
					aria-labelledby="product-heading"
					className="col-span-4 group-has-[[data-pending]]:animate-pulse lg:col-span-3"
				>
					<h2 className="sr-only" id="product-heading">
						rtyrt
					</h2>

					<div className="grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8">
						{/* {products.map((product, index) => (
            <ProductCard
              imagePriority={index <= 3}
              imageSize="wide"
              key={product.entityId}
              product={product}
            />
          ))} */}
						gfgfgh
					</div>

					{/* <Pagination
          endCursor={endCursor ?? undefined}
          hasNextPage={hasNextPage}
          hasPreviousPage={hasPreviousPage}
          startCursor={startCursor ?? undefined}
        /> */}
				</section>
			</div>
			{/* <CategoryViewed category={category} categoryId={categoryId} products={products} /> */}
		</div>
	);
}
