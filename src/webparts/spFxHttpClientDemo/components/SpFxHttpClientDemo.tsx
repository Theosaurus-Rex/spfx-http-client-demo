import * as React from "react";
import styles from "./SpFxHttpClientDemo.module.scss";
import { ISpFxHttpClientDemoProps } from "./ISpFxHttpClientDemoProps";
import { escape } from "@microsoft/sp-lodash-subset";
import { DefaultButton } from "office-ui-fabric-react";

export default class SpFxHttpClientDemo extends React.Component<
  ISpFxHttpClientDemoProps,
  {}
> {
  private onGetListItemsClicked = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();

    this.props.onGetListItems();
  };
  private onAddListItemClicked = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();

    this.props.onAddListItem();
  };

  private onUpdateListItemClicked = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();

    this.props.onUpdateListItem();
  };

  private onDeleteListItemClicked = (
    event: React.MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();

    this.props.onDeleteListItem();
  };
  public render(): React.ReactElement<ISpFxHttpClientDemoProps> {
    return (
      <div className={styles.spFxHttpClientDemo}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <p className={styles.title}>SharePoint Content!</p>
              <DefaultButton iconProps={{iconName: 'World'}} onClick={this.onGetListItemsClicked}>
                Get Countries
              </DefaultButton>
            </div>
          </div>

          <DefaultButton iconProps={{iconName: 'Add'}}onClick={this.onAddListItemClicked}>
            Add List Item
          </DefaultButton>
          <DefaultButton iconProps={{iconName: 'Edit'}} onClick={this.onUpdateListItemClicked}>Update List Item</DefaultButton>
          <DefaultButton iconProps={{iconName: 'Clear'}} onClick={this.onDeleteListItemClicked}>Delete List Item</DefaultButton>

          <div className={styles.row}>
            <ul className={styles.list}>
              {this.props.spListItems &&
                this.props.spListItems.map((list) => (
                  <li key={list.Id} className={styles.item}>
                    <strong>Id:</strong> {list.Id} <br/> <strong>Title:</strong>{" "}
                    {list.Title}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
