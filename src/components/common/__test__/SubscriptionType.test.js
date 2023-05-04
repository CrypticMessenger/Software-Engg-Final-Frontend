import { render } from "@testing-library/react";
import SubscriptionType from "../SubscriptionType";

describe("SubscriptionType", () => {
    const props = {
        dropdownList: ['Each Email', 'Digest', 'Abridged', 'No email'],
    }
    it("should render SubscriptionType component", () => {
        const { getByTestId } = render(<SubscriptionType {...props}/>);
        const subscriptionType = getByTestId("subscription-type");
        expect(subscriptionType).toBeInTheDocument();
    });
});