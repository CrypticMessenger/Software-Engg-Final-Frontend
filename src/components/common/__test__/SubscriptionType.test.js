import { render } from "@testing-library/react";
import SubscriptionType from "../SubscriptionType";

describe("SubscriptionType", () => {
    it("should render SubscriptionType component", () => {
        const { getByTestId } = render(<SubscriptionType/>);
        const subscriptionType = getByTestId("subscription-type");
        expect(subscriptionType).toBeInTheDocument();
    });
});