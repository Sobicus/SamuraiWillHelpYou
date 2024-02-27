import {create} from "react-test-renderer";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";

import {render, screen} from '@testing-library/react';
import {updateStatusTC} from "../../../redux/profile-reducer";

describe('ProfileStatus component', () => {
    // test('status from props should be in the state', async () => {
    //     const component = create(<ProfileStatusWithHooks status={'My first test component'} updateStatus={updateStatusTC}/>)
    //     const instance = component.getInstance()
    //     expect(instance.state.status).toBe('My first test component')
    // })
    // test('From element: exist in the DOM', () => {
    //     render(<ProfileStatusWithHooks status={'My first test component'}
    //                                    updateStatus={updateStatusTC}/>)
    //     expect(screen.getByText<HTMLSelectElement>('My first test component')).toBeInTheDocument()
    // })
    test("after creation <span> should be displayed", async () => {
        const component = create(<ProfileStatusWithHooks status={'My first test component'}
                                                         updateStatus={updateStatusTC}/>);
        const root = component.root;
        let span = await root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", async () => {
        const component = create(<ProfileStatusWithHooks status={'My first test component'}
                                                         updateStatus={updateStatusTC}/>);
        const root = component.root;
        expect(async () => {
            let input = await root.findByType("input");
        }).toThrow();
    });

    test("after creation <span> should contains correct status", async () => {
        const component = create(<ProfileStatusWithHooks status={'My first test component'}
                                                  updateStatus={updateStatusTC}/>);

        const root = await component.root;
        let span = await root.findByType("span");
        console.log(span)

        expect(span.children[0]).toBe("My first test component");
    });
    test("input should be displayed in editMode instead of span", async () => {
        const component = create(<ProfileStatusWithHooks status={'My first test component'}
                                                         updateStatus={updateStatusTC}/>);
        const root = component.root;
        let span = await root.findByType("span");
        span.props.onDoubleClick()
        let input = await root.findByType("input");
        expect(input.props.value).toBe('My first test component');
    });

    // test("callback should be called",  () => {
    //      const mockCallback = jest.fn();
    //      const component = create(<ProfileStatusWithHooks status={'My first test component'}
    //                                                       updateStatus={updateStatusTC}/>);
    //      const instance = component.getInstance();
    //      instance.deactivateEditMode();
    //      expect(mockCallback.mock.calls.length).toBe(1);
    //  });

})