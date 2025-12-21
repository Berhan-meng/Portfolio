import { featureList } from "./feature";

export default function Featured() {
  console.log(featureList);
  return (
    <div class="brands-grid separator-border mt-5">
      <div class="row">
        {featureList.map(({ param, num, init }) => {
          return (
            <div class="col-6 col-md-3">
              <div class="featured-box text-center">
                <h4 class="text-12 text-muted mb-0">
                  <span class="counter" data-from={init} data-to={num}>
                    {num}
                  </span>
                  +
                </h4>
                <p class="mb-0">{param}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
